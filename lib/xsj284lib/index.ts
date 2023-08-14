LIBRARY({
    name: 'xsj284lib',
    version: 1,
    shared: true,
    api: 'CoreEngine',
})

const ModTranslation = {
    /**
     * Batch translation by reading JSON files
     * @param {string} path The JSON file is located at the path to the mod root directory
     */
    addTranslations: (path: string) => {
        let translation = FileTools.ReadJSON(__dir__ + path)
        for (const key in translation) {
            Translation.addTranslation(key, translation[key])
        }
    },
}

EXPORT('ModTranslation', ModTranslation)
