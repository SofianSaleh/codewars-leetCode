words = {"10": 'A', "11": 'B', "12": 'C', "13": 'D', "14": 'E', "15": 'F'}


def rgb(r, g, b):
    arrOfRGB = [r, g, b]
    hex = ''
    for x in arrOfRGB:
        if x < 0:
            hex += '00'
        elif x > 255:
            hex += "FF"
        else:
            og = x / 16
            first = int(og)

            second = int((og - first) * 16)

            if str(first) in words:

                hex += words[str(first)]

            else:
                hex += str(first)
            if str(second) in words:

                hex += words[str(second)]

            else:
                hex += str(second)

    return hex
