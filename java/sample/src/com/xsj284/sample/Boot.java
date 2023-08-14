package com.xsj284.sample;

import com.zhekasmirnov.horizon.runtime.logger.Logger;
import org.jetbrains.annotations.NotNull;

import java.util.HashMap;

public class Boot {
    public static void boot(@NotNull HashMap<String, String> sources) {
        Logger.debug("TEST_MOD", sources.toString());

    }
}
