#!/usr/bin/env python3

import argparse


def jaccard(str1, str2):
    """ Get the Jaccard distance of two arbitrary strings, space separated."""
    str1 = set(str1.split())
    str2 = set(str2.split())
    return float(len(str1 & str2)) / len(str1 | str2)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('filepath', help='')
    args = parser.parse_args()

    f1 = args.filepath.strip()

    data = open(f1).readlines()

    for ln in data:
        ln = ln.replace(",", " ").replace("_", " ")
        row = ln.split("\t")  # By tab
        # print(row)
        r1 = row[0]
        r2 = row[1]

        print(jaccard(r1, r2))


if __name__ == '__main__':
    main()