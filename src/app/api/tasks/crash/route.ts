import { tasks } from "@/lib/tasks";

export const dynamic = "force-dynamic";

export function GET() {
  const task = tasks[0];
  if (!task) {
    return Response.json({ ok: false, error: "Task not found" }, { status: 404 });
  }
  return Response.json({ ok: true, status: task.status });
}
