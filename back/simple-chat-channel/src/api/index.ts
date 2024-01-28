import "reflect-metadata";
import { createServer, globalAgent } from "http";
import { config } from "@/config";
import { ExpressApp } from "@/api/ExpressApp";

// 120 seconds, double from the 60 seconds in the AWS keep alive time to avoid 502s.
const KEEP_ALIVE = 2 * 60 * 1000;

const express = new ExpressApp().getExpress();

globalAgent.maxSockets = 100;

const server = createServer(express);
server.setTimeout(KEEP_ALIVE);
server.keepAliveTimeout = KEEP_ALIVE;
server.headersTimeout = KEEP_ALIVE;

server.listen(config.get("server.port"), () => {
  console.log(`Connecting to the metaverse...\n`);
  console.log(`   _               _____`);
  console.log("  | |        /\\   |  __ \\     /\\");
  console.log("  | |       /  \\  | |__) |   /  \\");
  console.log("  | |      / /\\ \\ | |\\  /   / /\\ \\");
  console.log("  | |____ / /  \\ \\| | \\ \\  / /  \\ \\");
  console.log("  |______/_/    \\_\\_|  \\_\\/_/    \\_\\");
  console.log("\n");
  console.log(`Connected. Send messages to http://localhost:${config.get("server.port")}/v1/message`);
  console.log("\n");
});

function terminate() {
  console.log("Connections closed.\n\nThank you for your time and we hope you enjoyed this challenge!");
  server.close();
}

process.on("SIGINT", () => {
  console.log("RECEIVED SIGINT");
  terminate();
});

process.on("SIGTERM", () => {
  console.log("RECEIVED SIGTERM");
  terminate();
});
