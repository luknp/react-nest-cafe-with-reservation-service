// Turn enum into array
export const StringIsNumber = value => isNaN(Number(value)) === false;

export const EnumToArray = (enumme) => {
    return Object.keys(enumme)
        .filter(StringIsNumber)
        .map(key => enumme[key]);
};

export const StringEnumToArray = <T>(enumm: T) => [...new Set(Object.values(enumm)).values()];
