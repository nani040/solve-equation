const mainObject1 = {
    "op": "equal",
    "lhs": {
        "op": "add",
        "lhs": 1,
        "rhs": {
            "op": "multiply",
            "lhs": "x",
            "rhs": 10
        }
    },
    "rhs": 21
}
var mainObject2 = {
    "op": "equal",
    "lhs": {
        "op": "add",
        "lhs": {
            "op": "add",
            "lhs": "x",
            "rhs": 5
        },
        "rhs": 10
    },
    "rhs": 21
}
var mainObject3 = {
    "op": "equal",
    "lhs": {
        "op": "add",
        "lhs": {
            "op": "add",
            "lhs": "x",
            "rhs": 5
        },
        "rhs": {
            "op": "divide",
            "lhs": 5,
            "rhs": 5
        }
    },
    "rhs": 21
}