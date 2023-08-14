/**
 * @file header.ts
 */

/* create a test block */
BlockRegistry.createBlock('xm_test_block', [{
    name: 'xm_test_block',
    texture: [['xm_test_block', 0]],
    inCreative: true,
}])

/* create a test item */
ItemRegistry.createItem('xm_test_item', {
    name: 'xm_test_item',
    icon: 'xm_test_item',
    stack: 64,
    inCreative: true,
})


/* add a level-loaded callback */
Callback.addCallback('LevelLoaded', function () {
    Debug.message(`MC Ver.${getMCPEVersion().str}, CoreAPI Ver.${getCoreAPILevel()}`)
    Logger.Log('LevelLoaded', 'Mod_Debug')
    Logger.Flush()
})

/* Batch translation */
ModTranslation.addTranslations('translation.json')