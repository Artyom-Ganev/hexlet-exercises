package ru.ganev.collections;

import java.util.Collection;
import java.util.Iterator;

/**
 * The implementation of Collection based on Array
 *
 * @author Artyom Ganev
 */
public class ArrayCollection<T> implements Collection<T> {

    @SuppressWarnings("unchecked")
    private T[] array = (T[]) new Object[1];

    private int size = 0;

    @Override
    public int size() {
        return size;
    }

    @Override
    public boolean isEmpty() {
        return size() == 0;
    }

    @Override
    public boolean contains(Object o) {
        for (int i = 0; i < size; i++) {
            if (array[i].equals(o)) {
                return true;
            }
        }
        return false;
    }

    @Override
    public Iterator<T> iterator() {
        return null;
    }

    @Override
    public Object[] toArray() {
        // It's possible to use Arrays.copyOf()
        final Object[] newArray = new Object[size];
        System.arraycopy(array, 0, newArray, 0, size);
        return newArray;
    }

    @Override
    public <T1> T1[] toArray(T1[] a) {
        return null;
    }

    @Override
    public boolean add(T t) {
        if (array.length == size) {
            T[] tmp = array;
            //noinspection unchecked
            array = (T[]) new Object[size * 2];
            System.arraycopy(array, 0, tmp, 0, size);
        }
        array[size++] = t;
        return false;
    }

    @Override
    public boolean remove(Object o) {
        for (int i = 0; i < size; i++) {
            if (array[i].equals(o)) {
                if (i != size - 1) {
                    System.arraycopy(array, i + 1, array, i, size - i);
                }
                size--;
                return true;
            }
        }
        return false;
    }

    @Override
    public boolean containsAll(Collection<?> c) {
        return false;
    }

    @Override
    public boolean addAll(Collection<? extends T> c) {
        return false;
    }

    @Override
    public boolean removeAll(Collection<?> c) {
        return false;
    }

    @Override
    public boolean retainAll(Collection<?> c) {
        return false;
    }

    @Override
    public void clear() {

    }
}
