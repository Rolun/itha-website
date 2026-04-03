export async function onRequestPost(context) {
  const webhookUrl = context.env.DISCORD_WEBHOOK_URL;

  if (!webhookUrl) {
    return new Response("Webhook not configured.", { status: 500 });
  }

  const body = await context.request.json();

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });

  if (response.status === 204) {
    return new Response(null, { status: 204 });
  }

  return new Response("Failed to submit.", { status: response.status });
}
