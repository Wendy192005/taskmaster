import { useState } from 'react';
import Navbar from '../components/Navbar';
import styles from '../styles/itemList.module.css';

const ItemList = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Alice', item: 'Apples' },
    { id: 2, name: 'Bob', item: 'Bananas' },
  ]);
  const [name, setName] = useState('');
  const [newItem, setNewItem] = useState('');
  const [filterEnabled, setFilterEnabled] = useState(false);
  const [editId, setEditId] = useState(null);

  const addItem = () => {
    if (name.trim() === '' || newItem.trim() === '') return;

    const newEntry = {
      id: items.length + 1,
      name,
      item: newItem,
    };

    setItems([...items, newEntry]);
    setName('');
    setNewItem('');
  };

  const deleteItem = (id) => {
    setItems(items.filter((entry) => entry.id !== id));
  };

  const editItem = (id) => {
    const entry = items.find((i) => i.id === id);
    setName(entry.name);
    setNewItem(entry.item);
    setEditId(id);
  };

  const saveItem = () => {
    setItems(items.map((i) =>
      i.id === editId ? { ...i, name, item: newItem } : i
    ));
    setEditId(null);
    setName('');
    setNewItem('');
  };

  const filteredItems = filterEnabled
    ? items.filter((i) => i.item.startsWith('A'))
    : items;

  return (
    <div className={styles.container}>
      <Navbar />

      <div className={styles.header}>
        <h1>Item List</h1>
        <p>Keep track of items submitted by name, and filter or edit them as needed.</p>
      </div>

      {/* Add or Edit Form */}
      <div className={styles.addForm}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Enter your item"
        />
        {editId ? (
          <button onClick={saveItem}>Save Changes</button>
        ) : (
          <button onClick={addItem}>Add Item</button>
        )}
      </div>

      {/* Filter */}
      <div className={styles.filterBox}>
        <input
          type="checkbox"
          checked={filterEnabled}
          onChange={() => setFilterEnabled(!filterEnabled)}
        />
        <label>Show items starting with 'A'</label>
      </div>

      {/* Display Items */}
      <div className={styles.itemContainer}>
        {filteredItems.map((entry) => (
          <div key={entry.id} className={styles.itemCard}>
            <h3>{entry.name}</h3>
            <p>Item: {entry.item}</p>
            <div className={styles.actions}>
              <button onClick={() => editItem(entry.id)}>Edit</button>
              <button onClick={() => deleteItem(entry.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
