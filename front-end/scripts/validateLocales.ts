import fs from 'fs'
import path from 'path'

const localesFoldersPath = './public/locales/'
const localeFileName = 'common.json'

function sortObjectByKeys<T>(obj: Record<string, T>): Record<string, T> {
	return Object.keys(obj)
		.sort()
		.reduce(
			(sorted, key) => {
				sorted[key] = obj[key]
				return sorted
			},
			{} as Record<string, T>
		)
}

function processLocale(filePath: string): string[] {
	try {
		const content = fs.readFileSync(filePath, 'utf8')
		const parsed = JSON.parse(content)
		const sorted = sortObjectByKeys(parsed)

		fs.writeFileSync(filePath, JSON.stringify(sorted, null, 4))
		return Object.keys(sorted)
	} catch (error) {
		console.error(`Error processing ${filePath}:`, error)
		return []
	}
}

function main() {
	const localesFolders = fs.readdirSync(localesFoldersPath)
	const keys: Set<string> = new Set()
	const keysPerLocale: { [localeFilePath: string]: string[] } = {}

	localesFolders.forEach((localeFolder: string) => {
		const localeFilePath: string = path.join(
			localesFoldersPath,
			localeFolder,
			localeFileName
		)

		const newKeys: string[] = processLocale(localeFilePath)

		newKeys.forEach((newKey: string) => {
			keys.add(newKey)
		})

		keysPerLocale[localeFilePath] = newKeys
	})

	Object.entries(keysPerLocale).forEach(
		([localeFilePath, localeKeys]: [string, string[]]) => {
			keys.forEach((key: string) => {
				if (!localeKeys.includes(key)) {
					console.log(`Missing key "${key}" in ${localeFilePath}`)
				}
			})
		}
	)
}

main()
