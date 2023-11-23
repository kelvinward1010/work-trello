import { Button } from '@mantine/core'
import styles from './style.module.css';

function Footer() {
    return (
        <div className="fixed bottom-0 w-full p-4 border-t bg-slate-100">
            <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
                <h2 className='
                    bg-gradient-to-r 
                    from-blue-600 
                    via-green-500 
                    to-indigo-400 
                    inline-block 
                    text-transparent 
                    bg-clip-text
                    font-bold
                '>Kelvin Ward</h2>
                <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
                <Button 
                    className={styles.button_ghost}
                >
                    Privacy Policy
                </Button>
                <Button className={styles.button_ghost}>
                    Terms of Service
                </Button>
                </div>
            </div>
        </div>
    )
}

export default Footer