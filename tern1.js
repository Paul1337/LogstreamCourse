const ternConverted = (a) => {
    if (a > 10) {
        if (a > 5) {
            return 2 * a + 1;
        } else {
            if (a < 3) {
                switch (a % 2) {
                    case 0:
                        return 6;
                    case 1:
                        return 7;
                }
            } else {
                if (2 * (a - 2) > 4) {
                    return 5;
                } else {
                    switch (a % 2) {
                        case 0:
                            return 6;
                        case 1:
                            return 7;
                    }
                }
            }
        }
    } else {
        if (a * 2 > 5) {
            return 2 * a + 1;
        } else {
            if (a < 3) {
                switch (a % 2) {
                    case 0:
                        return 6;
                    case 1:
                        return 7;
                }
            } else {
                if (2 * (a - 2) > 4) {
                    return 5;
                } else {
                    switch (a % 2) {
                        case 0:
                            return 6;
                        case 1:
                            return 7;
                    }
                }
            }
        }
    }
};

const a = Math.floor(Math.random() * 100);
const tern =
    (a > 10 ? a : a * 2) > 5 ? 2 * a + 1 : (a < 3 ? 1 : 2 * (a - 2)) > 4 ? 5 : a % 2 == 0 ? 6 : 7;
console.log(tern);
console.log(ternConverted(a));
