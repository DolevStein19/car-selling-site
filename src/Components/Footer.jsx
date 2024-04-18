import React from 'react';


export default function Footer() {
    return (
        <footer style={styles.footer}>
            <div style={styles.container}>
                <p>&copy; 2024 Car Site</p>
                <p>Contact us: example@email.com | Phone: 123-456-7890</p>
            </div>
        </footer>
    );
}


const styles = {
    footer: {
        backgroundColor: '#333',
        color: '#fff',
        padding: '20px 0',
        marginTop: '20px',
        textAlign: 'center',
        
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto'
    }
};