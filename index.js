export function deprecatedCommand(msg) {
	const currentDate = new Date();
	const deprecatedCommands = [
		{
			command: ">>",
			message:
				">> 명령어는 더 이상 지원하지 않습니다. // 혹은 //?를 사용해주세요.",
			date: new Date("2024-11-14"),
		},
	];

	for (const cmd of deprecatedCommands) {
		if (msg.content.startsWith(cmd.command) && currentDate < cmd.date) {
			msg.reply(cmd.message);
			return;
		}
	}
}
