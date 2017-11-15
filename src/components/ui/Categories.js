import React from 'react'

const Categories = (props) => {

    return (
        <div>
            <h2>Categories</h2>

            <ul>
                {props
                    .categories
                    .map(category => (
                        <li key={category.name}>{category.name}
                        </li>
                    ))}

            </ul>

        </div>

    )
}

export default Categories