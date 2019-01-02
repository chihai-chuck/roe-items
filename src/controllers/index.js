new Vue({
    el: ".roe-items",
    data() {
        return {
            data: {
                bandage: {
                    image: "https://cdn.max-c.com/wiki/755790/supplies-bd.jpg",
                    name: "绷带",
                    desc: "使用绷带可逐渐恢复共10点生命值",
                    width: 2,
                    delay: 3000
                },
                medicalPackage: {
                    image: "https://cdn.max-c.com/wiki/755790/supplies-ylb.jpg",
                    name: "医疗包",
                    desc: "使用医疗包可直接恢复生命值50点",
                    width: 12,
                    delay: 6000
                },
                medicalBox: {
                    image: "https://cdn.max-c.com/wiki/755790/supplies-ylx.jpg",
                    name: "医疗箱",
                    desc: "使用医疗箱可直接恢复生命值100点",
                    width: 20,
                    delay: 8000
                },
                chocolate: {
                    image: "https://cdn.max-c.com/wiki/755790/supplies-chocolate.jpg",
                    name: "巧克力棒",
                    subName: "[活动模式]杀出个黎明",
                    desc: "使用可恢复20点生命值与2点体温",
                    width: 2,
                    delay: 1800,
                    invalid: true
                },
                canned: {
                    image: "https://cdn.max-c.com/wiki/755790/supplies-canned.jpg",
                    name: "罐头",
                    subName: "[活动模式]杀出个黎明",
                    desc: "使用可恢复75点生命值与10点体温",
                    width: 6,
                    delay: 4000,
                    invalid: true
                },
                cookedTurkeyLeg: {
                    image: "https://cdn.max-c.com/wiki/755790/supplies-khjt.jpg",
                    name: "熟火鸡腿",
                    subName: "[活动模式]杀出个黎明",
                    desc: "使用可恢复100点生命值与25点体温",
                    width: 10,
                    delay: 3500,
                    invalid: true
                },
                roastTurkeyLeg: {
                    image: "https://cdn.max-c.com/wiki/755790/supplies-khjt.jpg",
                    name: "烤火鸡腿",
                    subName: "[活动模式]杀出个黎明",
                    desc: "使用可获得食物增益效果1级",
                    width: 10
                },
                roastSteak: {
                    image: "https://cdn.max-c.com/wiki/755790/supplies-knp.jpg",
                    name: "烤牛排",
                    subName: "[活动模式]杀出个黎明",
                    desc: "使用可获得食物增益效果2级",
                    width: 10
                },
                roastChicken: {
                    image: "https://cdn.max-c.com/wiki/755790/supplies-kqj.jpg",
                    name: "烤全鸡",
                    subName: "[活动模式]杀出个黎明",
                    desc: "使用可获得食物增益效果3级",
                    width: 10
                }
            }
        }
    }
});
