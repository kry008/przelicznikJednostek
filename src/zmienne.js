var prefixLong = [
    {"name": "kilometr", "value": "0.001"},
    {"name": "metr", "value": "1"},
    {"name": "centymetr", "value": "100"},
    {"name": "milimetr", "value": "1000"},
    {"name": "dekametr", "value": "10"},
]
var prefixTime = [
    {
        "name": "sekunda",
        "value": "1"
    },
    {"name": "minuta", "value": 1/60},
    {"name": "godzina", "value": 1/3600},
]
var prefixWeight = [
    {"name": "kilogram", "value": 1},
    {"name": "gram", "value": 1000},
    {"name": "miligram", "value": 1000000},
]
var prefixMemory = [
    {"name": "bajt", "value": 1},
    {"name": "kilobajt", "value": 1/1000},
    {"name": "megabajt", "value": 1/1000000},
]
var prefixSpace = [
    {"name": "m3", "value": 1},
    {"name": "cm3", "value": 1000000},
]

export { prefixLong, prefixTime, prefixWeight, prefixMemory, prefixSpace };