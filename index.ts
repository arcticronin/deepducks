console.log("Hello via Bun!");
const server = Bun.serve({
    port: 3000,
    fetch(request) {
      return new Response("Welcome to DeepDucks!");
    },
  });
  
  console.log(`vai su localhost:${server.port}`);