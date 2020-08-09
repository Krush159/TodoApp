import React from 'react'
import styles from './completed.module.css'

export default class CompletedItems extends React.Component {
    constructor(props) {
        super(props)

    }
    delete(key) {

        this.props.remove(key)
    }
    
    render() {
        return (
            <>
                <ul className={styles.listC}>
                    {this.props.value.map(item =>
                        <li key={item.key}>
                            <input type="checkbox" checked className={styles.checkbox} />
                            <div className={styles.letter}>{item.inp}</div>
                            <button className={styles.delete} onClick={() => this.delete(item.key)}>X</button>
                        </li>
                    )}
                </ul>
                
            </>
        )
    }
}