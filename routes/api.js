module.exports = app => {
  app.get("/api/tasks", (req, res) => {
    res.json({tasks: "tasks"});
  });
  app.post("/api/tasks", (req, res) => {
    res.json({tasks: "tasks"});
  });
}