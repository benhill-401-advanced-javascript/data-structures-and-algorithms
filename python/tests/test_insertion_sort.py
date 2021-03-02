import pytest
from insertion_sort.insertion_sort import insertion_sort


def test_instantiate_empty():
    arr = []
    tester = insertion_sort(arr)
    assert tester == None


def test_sorting_random_inputs():
    random_input = [8, 4, 23, 42, 16, 15]
    insertion_sort(random_input)
    actual = random_input
    expected = [4, 8, 15, 16, 23, 42]
    assert actual == expected


def test_sorting_in_reverse():
    reverse_sort = [20, 18, 12, 8, 5, -2]
    insertion_sort(reverse_sort)
    actual = reverse_sort
    expected = [-2, 5, 8, 12, 18, 20]
    assert actual == expected


def test_nearly_sorted():
    nearly_sorted = [5, 12, 7, 5, 5, 7]
    insertion_sort(nearly_sorted)
    actual = nearly_sorted
    expected = [5, 5, 5, 7, 7, 12]
    assert actual == expected
