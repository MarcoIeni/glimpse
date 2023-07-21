import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
    {
        title: "Mnemonic 💡",
        description: (
            <>
                Glimpse organizes the most useful VSCode Commands by mnemonic keys, like{" "}
                <code>f</code> for file and <code>p</code> for project. If you use Vim motions,
                you'll feel right at home.
            </>
        ),
    },
    {
        title: "Discoverable 🔎",
        description: (
            <>
                Discover new VSCode Commands you wish you knew before, and execute them easily from
                your keyboard.
            </>
        ),
    },
    {
        title: "Customizable ⚙",
        description: (
            <>
                No need for complex configuration files: edit Glimpse menu and key bindings with
                plain JavaScript.
            </>
        ),
    },
];

function Feature({ title, description }) {
    return (
        <div className={clsx("col col--4")}>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
