import { mkdirSync, writeFileSync } from "node:fs";

// The funniest excuse for skipping a pointless meeting: the calendar
// itself held a difficult conversation and decided the meeting is not
// aligned with this quarter's priorities — pure corporate HR-speak,
// weaponised against the meeting.
const ENTRY =
  "Can't make it — my calendar and I had a difficult conversation, and it decided this meeting isn't aligned with my priorities this quarter.";

// Gate: 1 to 200 characters, not only whitespace, and a single line.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} chars, must be 1-200`);
}
if (!ENTRY.trim()) {
  throw new Error("entry must not be only whitespace");
}
if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);
