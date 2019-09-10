package ru.ganev.collections;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class ArrayCollectionTest {

    private ArrayCollection<Integer> collection = new ArrayCollection<>();

    @Test
    public void testSize() {
        Assertions.assertEquals(0, collection.size());
        collection.add(1);
        Assertions.assertEquals(1, collection.size());

    }

    @Test
    public void testIsEmpty() {
        Assertions.assertTrue(collection.isEmpty());
        collection.add(0);
        Assertions.assertFalse(collection.isEmpty());
    }

    @Test
    public void testContains() {
        Assertions.assertFalse(collection.contains(0));
        collection.add(0);
        Assertions.assertTrue(collection.contains(0));
    }

    @Test
    public void testToArray() {
        Assertions.assertArrayEquals(new Integer[0], collection.toArray());
        collection.add(0);
        final Object[] a = {0};
        Assertions.assertArrayEquals(a, collection.toArray());
    }

    @Test
    public void testRemove() {
        Assertions.assertFalse(collection.remove(0));
        collection.add(0);
        Assertions.assertTrue(collection.remove(0));
    }
}
