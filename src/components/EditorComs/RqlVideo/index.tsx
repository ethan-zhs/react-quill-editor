import React from 'react'
import ModalWrapper from '@components/Modal/ModalWrapper'
import styles from './index.less'

class RqlVideo extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
    }

    render() {
        const { poster, url } = this.props

        return (
            <div
                className={styles['rql-video']}
                style={{
                    backgroundImage: `url(${poster})`
                }}
            >
                <div className={styles['rql-video-play']}>
                    <ModalWrapper
                        title="预览视频"
                        style={{ width: 750 }}
                        footer={{ cancel: { text: '关闭' } }}
                        content={
                            <svg viewBox="0 0 1024 1024" width="60" height="60">
                                <path d="M0 0h1024v1024H0z" fillOpacity=".01"></path>
                                <path d="M512 64c247.424 0 448 200.576 448 448s-200.576 448-448 448S64 759.424 64 512 264.576 64 512 64z m0 64C299.936 128 128 299.936 128 512s171.936 384 384 384 384-171.936 384-384S724.064 128 512 128z m-64 219.808a32 32 0 0 1 17.76 5.344l198.304 132.224a32 32 0 0 1 0 53.248l-198.304 132.224A32 32 0 0 1 416 644.16V379.84a32 32 0 0 1 32-32z"></path>
                            </svg>
                        }
                    >
                        <div className={styles['rql-video-preview']}>
                            <video controls src={url} poster={poster}></video>
                        </div>
                    </ModalWrapper>
                </div>
            </div>
        )
    }
}

export default RqlVideo
