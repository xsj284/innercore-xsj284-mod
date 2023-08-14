declare function Launch(): void

ConfigureMultiplayer({
    name: __name__.toString(),
    version: '1.0-dev.1',
    isClientOnly: false,
})

Launch()
