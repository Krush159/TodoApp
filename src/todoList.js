import React from 'react'
import styles from './todoList.module.css'

export default class TodoItems extends React.Component {
    constructor(props) {
        super(props)

    }
    delete(key) {

        this.props.remove(key)
    }
    strike(key) {
        this.props.complete(key)
    }
    render() {
        return (
            <>
                <ul className={styles.list}>
                    {this.props.value.map(item =>
                        <li key={item.key}>
                            <input type="checkbox" className={styles.checkbox}
                                onClick={() => this.strike(item.key)} />
                            <div className={styles.letter}>{item.inp}</div>
                            <button className={styles.delete} onClick={() => this.delete(item.key)}>X</button>
                        </li>
                    )}
                </ul>
                
            </>
        )
    }
}