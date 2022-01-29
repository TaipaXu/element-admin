#!/usr/bin/env python3

from distutils.dir_util import copy_tree

copy_tree("./extensions", "./dist/extensions")
