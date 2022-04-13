var prefixLong = [
    {
        "name": "kilometr", 
        "value": 0.001
    },
    {
        "name": "metr",
        "value": 1
    },
    {
        "name": "centymetr", 
        "value": 100
    },
    {
        "name": "milimetr", 
        "value": 1000
    },
    {
        "name": "dekametr", 
        "value": 10
    },
    {
        "name": "mila morska", 
        "value": 1/1852
    },
    {
        "name": "mila lądowa", 
        "value": 1/1609
    },
]
var prefixTime = [
    {
        "name": "sekunda",
        "value": "1"
    },
    {
        "name": "minuta",
        "value": 1/60
    },
    {
        "name": "godzina",
        "value": 1/3600
    },
    {
        "name": "dzień",
        "value": 1/86400
    },
    {
        "name": "nano sekunda",
        "value": 1000000000
    },
    {
        "name": "mili sekunda",
        "value": 1000000
    },
]
var prefixWeight = [
    {
        "name": "kilogram",
        "value": 1
    },
    {
        "name": "gram",
        "value": 1000
    },
    {
        "name": "miligram",
        "value": 1000000
    },
    {
        "name": "dekagram",
        "value": 10
    },
    {
        "name": "tona",
        "value": 0.001
    },
    {
        "name": "tona",
        "value": 0.001
    },
    {
        "name": "funt",
        "value": 2.20462262
    }
]
var prefixMemory = [
    {
        "name": "bit", 
        "value": 1
    },
    {
        "name": "kilobit", 
        "value": 1/1000
    },
    {
        "name": "megabit", 
        "value": 1/1000000
    },
    {
        "name": "bajt",
        "value": 1/8
    },
    {
        "name": "kilobajt",
        "value": 1/(8 * 1024)
    },
    {
        "name": "megabajt",
        "value": 1/(8 * 1024 * 1024)
    },
    {
        "name": "gigabit",
        "value": 1/1000000000
    },
    {
        "name": "gigabajt",
        "value": 1/(8 * 1024 * 1024 * 1024)
    },
]
var prefix3 = [
    {
        "name": "m3", 
        "value": 1
    },
    {
        "name": "cm3", 
        "value": 1000000
    },
    {
        "name": "mm3", 
        "value": 1000000000
    },
    {
        "name": "km3",
        "value": 1/1000000
    },
    {
        "name": "l",
        "value": 1/1000
    },
    {
        "name": "ml",
        "value": 1/1000000
    },

]

export { prefixLong, prefixTime, prefixWeight, prefixMemory, prefix3 };