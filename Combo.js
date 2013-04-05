var Combo = {
    create: function (c) {
        keypress.register_combo(c);
        Help.add(c);
    }
};
