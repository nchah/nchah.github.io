#!/usr/bin/env python3






def jaccard(str1, str2):
    """ Get the Jaccard distance of two arbitrary strings, space separated."""
    str1 = set(str1.split())
    str2 = set(str2.split())
    return float(len(str1 & str2)) / len(str1 | str2)





