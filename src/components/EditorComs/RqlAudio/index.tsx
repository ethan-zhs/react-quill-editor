import React from 'react'
import styles from './index.less'

class RqlAudio extends React.Component<any, any> {
    constructor(props: any) {
        super(props)

        this.state = {
            formatDelta: null
        }
    }

    render() {
        const { filename, duration } = this.props

        return (
            <div className={styles['rql-audio']}>
                <strong className={styles['rql-audio-title']}>{filename}</strong>
                <div className={styles['rql-audio-controls']}>
                    <div className={styles['rql-audio-progress']}>
                        <div className={styles['rql-audio-progress-bar']}></div>
                        <div className={styles['rql-audio-time']}>
                            <span>00:00</span>
                            <span>{duration}</span>
                        </div>
                    </div>
                    <div className={styles['rql-audio-play-btn']}>
                        <svg viewBox="0 0 1024 1024" width="26" height="26">
                            <path d="M298.666667 768h85.333333V256H298.666667v512z m170.666666 170.666667h85.333334V85.333333h-85.333334v853.333334z m-341.333333-341.333334h85.333333v-170.666666H128v170.666666z m512 170.666667h85.333333V256h-85.333333v512z m170.666667-341.333333v170.666666h85.333333v-170.666666h-85.333333z"></path>
                        </svg>
                    </div>
                </div>
            </div>
        )
    }
}

export default RqlAudio
