def find_uniq(arr):
    # your code here
    u = dict()
    for i in arr:
        if i in u:
            u[i] += 1
        else:
            u[i] = 1
    for k, v in u.items():
        if v == 1:
            return k

    return None   # n: unique integer in the array
