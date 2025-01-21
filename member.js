function skillsMember() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        "JavaScript",
        "React",
        "Node",
        "MongoDB",
        "Express",
        "GraphQL",
      ]);
    }, 2000);
  });
}
