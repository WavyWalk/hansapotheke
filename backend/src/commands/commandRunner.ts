import {ScrapeOriginalDataCommand} from "./ScrapeOriginalDataCommand";

export const commandRunner = {
    run: async (args: string[]) => {
        const command = args[0] ?? null
        if (!command) {
            return false
        }
        switch (command) {
            case 'scrapeData':
                await ScrapeOriginalDataCommand.run()
                break
            default:
                return false
        }
        return true
    }
}