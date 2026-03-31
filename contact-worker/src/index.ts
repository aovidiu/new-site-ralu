type WorkerEnv = {
	FORMSPREE_URL: string;
	ALLOWED_ORIGIN: string;
};

type ContactPayload = {
	name?: string;
	email?: string;
	message?: string;
};

function getCorsHeaders(origin: string, allowedOrigin: string) {
	const isAllowed = origin === allowedOrigin || origin === "http://localhost:4200";

	return {
		"Access-Control-Allow-Origin": isAllowed ? origin : allowedOrigin,
		"Access-Control-Allow-Methods": "POST, OPTIONS",
		"Access-Control-Allow-Headers": "Content-Type, Accept",
		"Vary": "Origin",
	};
}

function jsonResponse(body: unknown, status: number, corsHeaders: Record<string, string>) {
	return new Response(JSON.stringify(body), {
		status,
		headers: {
			"Content-Type": "application/json",
			...corsHeaders,
		},
	});
}

export default {
	async fetch(request, env): Promise<Response> {
		const origin = request.headers.get("Origin") ?? "";
		const corsHeaders = getCorsHeaders(origin, env.ALLOWED_ORIGIN);

		if (request.method === "OPTIONS") {
			return new Response(null, { status: 204, headers: corsHeaders });
		}

		const requestUrl = new URL(request.url);
		if (request.method !== "POST" || requestUrl.pathname !== "/contact") {
			return jsonResponse({ error: "Not Found" }, 404, corsHeaders);
		}

		let payload: ContactPayload;
		try {
			payload = (await request.json()) as ContactPayload;
		} catch {
			return jsonResponse({ error: "Body JSON invalid." }, 400, corsHeaders);
		}

		const name = payload.name?.trim();
		const email = payload.email?.trim();
		const message = payload.message?.trim();

		const upstream = await fetch(env.FORMSPREE_URL, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json",
			},
			body: JSON.stringify({ name, email, message }),
		});

		let upstreamJson: unknown;
		try {
			upstreamJson = await upstream.json();
		} catch {
			upstreamJson = { error: "Raspuns invalid de la server." };
		}
		return jsonResponse(upstreamJson, upstream.status, corsHeaders);
	},
} satisfies ExportedHandler<WorkerEnv>;
