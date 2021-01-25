import React from 'react'

class Icon extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
    }

    render() {
        const Icons = this.Icons

        return <Icons {...this.props} />
    }

    Icons(props: any) {
        const { type = '', width = 18, height = 18 } = props
        switch (type) {
            case 'undo':
                return (
                    <svg className="rql-svg-icon" viewBox="0 0 1024 1024" width={width} height={height}>
                        <path d="M289.6384 256H614.4a307.2 307.2 0 1 1 0 614.4H204.8a51.2 51.2 0 0 1 0-102.4h409.6a204.8 204.8 0 1 0 0-409.6H286.0032l59.2384 59.2384A51.2 51.2 0 1 1 272.7936 489.984L128 345.2416a51.2 51.2 0 0 1 0-72.448L272.7936 128a51.2 51.2 0 0 1 72.448 72.3968L289.6384 256z"></path>
                    </svg>
                )
            case 'redo':
                return (
                    <svg className="rql-svg-icon" viewBox="0 0 1024 1024" width={width} height={height}>
                        <path d="M737.9968 256l-55.6032-55.6032A51.2 51.2 0 1 1 754.8416 128l144.7936 144.7936a51.2 51.2 0 0 1 0 72.448L754.8416 489.984a51.2 51.2 0 0 1-72.448-72.3968L741.632 358.4H409.6a204.8 204.8 0 1 0 0 409.6h409.6a51.2 51.2 0 0 1 0 102.4H409.6A307.2 307.2 0 1 1 409.6 256h328.3968z"></path>
                    </svg>
                )
            case 'clean':
                return (
                    <svg className="rql-svg-icon" viewBox="0 0 1024 1024" width={width} height={height}>
                        <path d="M719.329882 422.249412l-255.578353 255.578353 234.315295 234.315294 255.518117-255.638588-234.315294-234.255059zM59.151059 315.813647l298.164706-298.164706a60.235294 60.235294 0 0 1 85.172706 0l596.329411 596.329412a60.235294 60.235294 0 0 1 0 85.172706l-298.164706 298.164706a60.235294 60.235294 0 0 1-85.232941 0l-596.329411-596.329412a60.235294 60.235294 0 0 1 0-85.172706z"></path>
                    </svg>
                )
            case 'format-brush':
                return (
                    <svg className="rql-svg-icon" viewBox="0 0 1024 1024" width={width} height={height}>
                        <path d="M260.992 448H768a64 64 0 0 1 64 64v384h-103.232C672 864 640 736 640 704c0 32 0 128-64 192H96c76.096-76.096 109.76-203.008 101.056-380.864A64 64 0 0 1 260.992 448zM640 256h128a64 64 0 0 1 0 128H256a64 64 0 1 1 0-128h128a32 32 0 0 0 32-32V128a64 64 0 0 1 64-64h64a64 64 0 0 1 64 64v96a32 32 0 0 0 32 32z"></path>
                    </svg>
                )
            case 'bold':
                return (
                    <svg className="rql-svg-icon" viewBox="0 0 1024 1024" width={width} height={height}>
                        <path d="M660.992 492.864c34.944 11.072 62.144 30.976 81.408 59.712 21.376 32 32 74.432 32 127.232 0 79.168-22.464 137.984-67.712 176-38.336 31.104-92.16 46.592-161.152 46.592H320A70.4 70.4 0 0 1 249.6 832V192A70.4 70.4 0 0 1 320 121.6h224.64c64.64 0 115.456 18.88 152.064 56.832 34.176 35.712 51.2 83.52 51.2 143.168 0 43.328-8.768 81.024-26.496 113.024a165.888 165.888 0 0 1-60.416 58.24zM365.696 263.232v155.456c0 14.08 11.456 25.6 25.6 25.6h126.016c41.472 0 71.168-8.512 88.96-24.96 16.96-17.28 25.6-44.8 25.6-82.624 0-34.944-8.576-59.776-25.216-74.88-18.112-16-47.232-24.192-87.616-24.192H391.296a25.6 25.6 0 0 0-25.6 25.6z m0 322.688v174.848c0 14.08 11.456 25.6 25.6 25.6H530.56c38.208 0 67.584-7.232 88.192-21.504 26.368-18.048 39.552-46.912 39.552-87.232 0-42.112-9.728-72-28.8-89.92-19.84-18.112-51.84-27.392-96.32-27.392H391.296a25.6 25.6 0 0 0-25.6 25.6z"></path>
                    </svg>
                )
            case 'italic':
                return (
                    <svg className="rql-svg-icon" viewBox="0 0 1024 1024" width={width} height={height}>
                        <path d="M640 853.333333H298.666667v-85.333333h124.885333l90.282667-512H384V170.666667h341.333333v85.333333h-124.885333l-90.282667 512H640z"></path>
                    </svg>
                )
            case 'underline':
                return (
                    <svg className="rql-svg-icon" viewBox="0 0 1024 1024" width={width} height={height}>
                        <path d="M868.571429 845.714286H155.428571c-5.028571 0-9.142857 3.885714-9.142857 8.685714v69.485714c0 4.8 4.114286 8.685714 9.142857 8.685715h713.142858c5.028571 0 9.142857-3.885714 9.142857-8.685715v-69.485714c0-4.8-4.114286-8.685714-9.142857-8.685714z m-356.571429-86.857143c79.314286 0 153.828571-30.971429 210.057143-87.085714C778.285714 615.657143 809.142857 541.028571 809.142857 461.714286V105.142857c0-7.542857-6.171429-13.714286-13.714286-13.714286h-68.571428c-7.542857 0-13.714286 6.171429-13.714286 13.714286v356.571429c0 110.857143-90.285714 201.142857-201.142857 201.142857s-201.142857-90.285714-201.142857-201.142857V105.142857c0-7.542857-6.171429-13.714286-13.714286-13.714286h-68.571428c-7.542857 0-13.714286 6.171429-13.714286 13.714286v356.571429c0 79.314286 30.971429 153.828571 87.085714 210.057143C358.057143 728 432.685714 758.857143 512 758.857143z"></path>
                    </svg>
                )
            case 'strike':
                return (
                    <svg className="rql-svg-icon" viewBox="0 0 1024 1024" width={width} height={height}>
                        <path d="M731.904 597.333333c9.813333 22.016 14.762667 46.506667 14.762667 73.386667 0 57.258667-22.357333 102.058667-67.029334 134.272C634.88 837.205333 573.141333 853.333333 494.336 853.333333c-69.973333 0-139.221333-16.256-207.786667-48.810666V708.266667c64.853333 37.418667 131.2 56.149333 199.082667 56.149333 108.842667 0 163.413333-31.232 163.797333-93.738667a94.293333 94.293333 0 0 0-27.648-68.394666l-5.12-4.992H128v-85.333334h768v85.333334h-164.096z m-173.994667-128H325.504a174.336 174.336 0 0 1-20.522667-22.272C286.549333 423.253333 277.333333 394.496 277.333333 360.618667c0-52.736 19.882667-97.578667 59.605334-134.528C376.746667 189.141333 438.229333 170.666667 521.472 170.666667c62.762667 0 122.837333 13.994667 180.138667 41.984v91.818666c-51.2-29.312-107.306667-43.946667-168.362667-43.946666-105.813333 0-158.677333 33.365333-158.677333 100.096 0 17.92 9.301333 33.536 27.904 46.890666 18.602667 13.354667 41.557333 23.978667 68.821333 32 26.453333 7.68 55.338667 17.664 86.613333 29.824z"></path>
                    </svg>
                )
            case 'header':
                return (
                    <svg className="rql-svg-icon" viewBox="0 0 1024 1024" width={width} height={height}>
                        <path d="M192 128m64 0l32 0q64 0 64 64l0 640q0 64-64 64l-32 0q-64 0-64-64l0-640q0-64 64-64Z M320 448h448v128H320z M736 128h32a64 64 0 0 1 64 64v640a64 64 0 0 1-64 64h-32a64 64 0 0 1-64-64V192a64 64 0 0 1 64-64z"></path>
                    </svg>
                )
            case 'font-color':
                return (
                    <svg className="rql-svg-icon" viewBox="0 0 1024 1024" width={width} height={height}>
                        <path d="M480 128h64a64 64 0 0 1 59.328 40.128l275.008 683.904a32 32 0 0 1-29.696 43.968H738.56a32 32 0 0 1-29.76-20.096l-59.072-147.776A38.4 38.4 0 0 0 614.016 704H409.6a38.4 38.4 0 0 0-35.456 23.68l-61.376 148.48a32 32 0 0 1-29.568 19.84H175.36a32 32 0 0 1-29.696-43.968L420.672 168.128A64 64 0 0 1 480 128z m-40.96 448h145.92a16 16 0 0 0 14.912-21.632l-57.92-154.496a32 32 0 0 0-59.904 0l-57.92 154.496A16 16 0 0 0 439.04 576z"></path>
                    </svg>
                )
            case 'background-color':
                return (
                    <svg className="rql-svg-icon" viewBox="0 0 1024 1024" width={width} height={height}>
                        <path d="M260.376 617.741c-9.641 9.362-14.46 22.46-14.46 39.31 0 14.791 5.24 26.861 15.726 36.223 10.479 9.36 24.331 14.037 41.557 14.037 23.961 0 43.705-8.422 59.245-25.27s23.309-37.999 23.309-63.455v-29.77l-72.727 9.827c-25.462 3.373-43.008 9.737-52.65 19.098zM829.005 92.92H190.046c-70.58 0-127.791 57.212-127.791 127.792v575.063c0 70.58 57.212 127.792 127.791 127.792h638.959c70.58 0 127.791-57.212 127.791-127.792V220.711c0.001-70.58-57.212-127.792-127.791-127.792z m-388.78 651.739h-54.472v-48.019h-1.406C362.82 733.52 331.09 751.96 289.16 751.96c-30.146 0-54.1-8.146-71.883-24.433-17.789-16.281-26.677-38.28-26.677-65.985 0-58.024 34.35-91.818 103.051-101.365l92.1-12.919c0-50.727-20.971-76.094-62.9-76.094-37.251 0-71.231 12.543-101.926 37.628V455.72c30.887-19.277 66.547-28.92 106.98-28.92 74.873 0 112.316 39.31 112.316 117.934v199.924z m344.392-39.17c-25.737 30.983-60.044 46.472-102.91 46.472-40.434 0-71.226-17.035-92.382-51.104H588.2v43.8h-55.033V285.004H588.2v202.73h1.125c24.331-40.62 59.902-60.931 106.7-60.931 38.938 0 69.87 13.712 92.803 41.135 22.932 27.425 34.401 64.912 34.401 112.458 0 52.412-12.875 94.111-38.612 125.094z m-103.754-233.2c-26.95 0-49.187 9.642-66.688 28.92-17.5 19.284-26.249 43.807-26.249 73.57v42.12c0 25.085 8.14 46.286 24.428 63.596 16.287 17.322 36.688 25.973 61.212 25.973 29.2 0 52.037-11.227 68.515-33.692 16.466-22.466 24.709-53.533 24.709-93.225 0-32.752-7.68-58.822-23.029-78.202-15.347-19.373-36.318-29.06-62.898-29.06z"></path>
                    </svg>
                )
            case 'align-left':
                return (
                    <svg className="rql-svg-icon" viewBox="0 0 1024 1024" width={width} height={height}>
                        <path d="M128 128m48 0l672 0q48 0 48 48l0 0q0 48-48 48l-672 0q-48 0-48-48l0 0q0-48 48-48Z M128 352m48 0l288 0q48 0 48 48l0 0q0 48-48 48l-288 0q-48 0-48-48l0 0q0-48 48-48Z M128 576m48 0l672 0q48 0 48 48l0 0q0 48-48 48l-672 0q-48 0-48-48l0 0q0-48 48-48Z M128 800m48 0l288 0q48 0 48 48l0 0q0 48-48 48l-288 0q-48 0-48-48l0 0q0-48 48-48Z"></path>
                    </svg>
                )
            case 'align-right':
                return (
                    <svg className="rql-svg-icon" viewBox="0 0 1024 1024" width={width} height={height}>
                        <path d="M128 128m48.00000001 0l671.99999998 0q48 0 48.00000001 48.00000001l0 0q0 48-48 47.99999999l-672 0q-48 0-48-47.99999999l0 0q0-48 48.00000001-48.00000001Z M511.99999993 352m48.00000001 0l288 0q48 0 48 48l0 0q0 48-48 48l-287.99999999 0q-48 0-48.00000001-48l0 0q0-48 48-48Z M128 576m48.00000001 0l671.99999998 0q48 0 48.00000001 48l0 0q0 48-48 48l-672 0q-48 0-48-48l0 0q0-48 48.00000001-48Z M511.99999994 800m48 0l288 0q48 0 48 48l0 0q0 48-48 48l-287.99999999 0q-48 0-48.00000001-48.00000001l0 0q0-48 48-47.99999999Z"></path>
                    </svg>
                )
            case 'align-center':
                return (
                    <svg className="rql-svg-icon" viewBox="0 0 1024 1024" width={width} height={height}>
                        <path d="M128 128m48 0l672 0q48 0 48 48l0 0q0 48-48 48l-672 0q-48 0-48-48l0 0q0-48 48-48Z M320 352m48 0l288 0q48 0 48 48l0 0q0 48-48 48l-288 0q-48 0-48-48l0 0q0-48 48-48Z M128 576m48 0l672 0q48 0 48 48l0 0q0 48-48 48l-672 0q-48 0-48-48l0 0q0-48 48-48Z M320 800m48 0l288 0q48 0 48 48l0 0q0 48-48 48l-288 0q-48 0-48-48l0 0q0-48 48-48Z"></path>
                    </svg>
                )
            case 'align-justify':
                return (
                    <svg className="rql-svg-icon" viewBox="0 0 1024 1024" width={width} height={height}>
                        <path d="M128 128m48 0l672 0q48 0 48 48l0 0q0 48-48 48l-672 0q-48 0-48-48l0 0q0-48 48-48Z M128 352m48 0l672 0q48 0 48 48l0 0q0 48-48 48l-672 0q-48 0-48-48l0 0q0-48 48-48Z M128 576m48 0l672 0q48 0 48 48l0 0q0 48-48 48l-672 0q-48 0-48-48l0 0q0-48 48-48Z M128 800m48 0l672 0q48 0 48 48l0 0q0 48-48 48l-672 0q-48 0-48-48l0 0q0-48 48-48Z"></path>
                    </svg>
                )
            case 'indent':
                return (
                    <svg className="rql-svg-icon" viewBox="0 0 1024 1024" width={width} height={height}>
                        <path d="M128 128m48 0l672 0q48 0 48 48l0 0q0 48-48 48l-672 0q-48 0-48-48l0 0q0-48 48-48Z M480 352m48 0l288 0q48 0 48 48l0 0q0 48-48 48l-288 0q-48 0-48-48l0 0q0-48 48-48Z M480 576m48 0l288 0q48 0 48 48l0 0q0 48-48 48l-288 0q-48 0-48-48l0 0q0-48 48-48Z M160 640.64c0 34.944 22.144 45.632 49.728 23.552l140.544-112.384c27.52-22.016 27.52-57.536 0-79.616L209.728 359.808c-27.52-22.016-49.728-10.944-49.728 23.616v257.152z M128 800m48 0l672 0q48 0 48 48l0 0q0 48-48 48l-672 0q-48 0-48-48l0 0q0-48 48-48Z"></path>
                    </svg>
                )
            case 'indent-both-ends':
                return (
                    <svg className="rql-svg-icon" viewBox="0 0 1024 1024" width={width} height={height}>
                        <path d="M128 128m48 0l672 0q48 0 48 48l0 0q0 48-48 48l-672 0q-48 0-48-48l0 0q0-48 48-48Z M416 352m48 0l96 0q48 0 48 48l0 0q0 48-48 48l-96 0q-48 0-48-48l0 0q0-48 48-48Z M416 576m48 0l96 0q48 0 48 48l0 0q0 48-48 48l-96 0q-48 0-48-48l0 0q0-48 48-48Z M160 640.64c0 34.944 22.144 45.632 49.728 23.552l140.544-112.384c27.52-22.016 27.52-57.536 0-79.616L209.728 359.808c-27.52-22.016-49.728-10.944-49.728 23.616v257.152zM880 640.64c0 34.944-22.144 45.632-49.728 23.552l-140.544-112.384c-27.52-22.016-27.52-57.536 0-79.616l140.544-112.384c27.52-22.016 49.728-10.944 49.728 23.616v257.152z M128 800m48 0l672 0q48 0 48 48l0 0q0 48-48 48l-672 0q-48 0-48-48l0 0q0-48 48-48Z"></path>
                    </svg>
                )
            case 'segment-front-distance':
                return (
                    <svg className="rql-svg-icon" viewBox="0 0 1024 1024" width={width} height={height}>
                        <path d="M576 128m48 0l224 0q48 0 48 48l0 0q0 48-48 48l-224 0q-48 0-48-48l0 0q0-48 48-48Z M576 352m48 0l224 0q48 0 48 48l0 0q0 48-48 48l-224 0q-48 0-48-48l0 0q0-48 48-48Z M128 576m48 0l672 0q48 0 48 48l0 0q0 48-48 48l-672 0q-48 0-48-48l0 0q0-48 48-48Z M448.64 368c34.944 0 45.632-22.144 23.552-49.728L359.808 177.728c-22.016-27.52-57.536-27.52-79.616 0L167.808 318.272c-22.016 27.52-10.944 49.728 23.616 49.728h257.152z M128 800m48 0l672 0q48 0 48 48l0 0q0 48-48 48l-672 0q-48 0-48-48l0 0q0-48 48-48Z"></path>
                    </svg>
                )
            case 'segment-end-distance':
                return (
                    <svg className="rql-svg-icon" viewBox="0 0 1024 1024" width={width} height={height}>
                        <path d="M448 896m-48 0l-224 0q-48 0-48-48l0 0q0-48 48-48l224 0q48 0 48 48l0 0q0 48-48 48Z M448 672m-48 0l-224 0q-48 0-48-48l0 0q0-48 48-48l224 0q48 0 48 48l0 0q0 48-48 48Z M896 448m-48 0l-672 0q-48 0-48-48l0 0q0-48 48-48l672 0q48 0 48 48l0 0q0 48-48 48Z M575.36 656c-34.944 0-45.632 22.144-23.552 49.728L664.192 846.272c22.016 27.52 57.536 27.52 79.616 0L856.192 705.728c22.016-27.52 10.944-49.728-23.616-49.728l-257.152 0z M896 224m-48 0l-672 0q-48 0-48-48l0 0q0-48 48-48l672 0q48 0 48 48l0 0q0 48-48 48Z"></path>
                    </svg>
                )
            case 'line-height':
                return (
                    <svg className="rql-svg-icon" viewBox="0 0 1024 1024" width={width} height={height}>
                        <path d="M469.333333 170.666667h426.666667v85.333333H469.333333V170.666667zM256 298.666667v170.666666H170.666667V298.666667H42.666667l170.666666-170.666667 170.666667 170.666667H256z m0 426.666666h128l-170.666667 170.666667-170.666666-170.666667h128v-170.666666h85.333333v170.666666z m213.333333 42.666667h426.666667v85.333333H469.333333v-85.333333z m-85.333333-298.666667h512v85.333334H384v-85.333334z"></path>
                    </svg>
                )
            case 'letter-spacing':
                return (
                    <svg className="rql-svg-icon" viewBox="0 0 1024 1024" width={width} height={height}>
                        <path d="M505.088 384h13.824a64 64 0 0 1 59.392 40.128l172.032 427.904a32 32 0 0 1-29.696 43.968h-50.432a32 32 0 0 1-29.696-20.096l-33.536-83.776A38.4 38.4 0 0 0 571.328 768H452.352a38.4 38.4 0 0 0-35.52 23.68l-34.88 84.48a32 32 0 0 1-29.568 19.84H303.36a32 32 0 0 1-29.696-43.968l172.032-427.904A64 64 0 0 1 505.088 384z m-33.984 298.688h81.792a16 16 0 0 0 14.976-21.632l-25.92-69.12a32 32 0 0 0-59.904 0l-25.92 69.12a16 16 0 0 0 14.976 21.632z M747.008 299.072h-464v64c0 35.584-22.144 45.568-49.472 22.784L140.416 308.288c-27.392-22.848-27.328-59.648 0-82.432L233.6 148.288c27.392-22.848 49.472-12.544 49.472 22.784v64h464v-64c0-35.328 22.016-45.632 49.408-22.784L889.6 225.856c27.328 22.784 27.392 59.52 0 82.432l-93.12 77.568c-27.328 22.784-49.408 12.8-49.408-22.784v-64z"></path>
                    </svg>
                )
            case 'sequence':
                return (
                    <svg className="rql-svg-icon" viewBox="0 0 1024 1024" width={width} height={height}>
                        <path d="M384 128m64 0l384 0q64 0 64 64l0 0q0 64-64 64l-384 0q-64 0-64-64l0 0q0-64 64-64Z M192 192m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z M192 512m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z M192 832m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z M384 448m64 0l384 0q64 0 64 64l0 0q0 64-64 64l-384 0q-64 0-64-64l0 0q0-64 64-64Z M384 768m64 0l384 0q64 0 64 64l0 0q0 64-64 64l-384 0q-64 0-64-64l0 0q0-64 64-64Z"></path>
                    </svg>
                )
            case 'table':
                return (
                    <svg className="rql-svg-icon" viewBox="0 0 1024 1024" width={width} height={height}>
                        <path d="M57.6 132.48v785.92h908.8V132.48z m844.16 64v203.52H121.6V196.48zM397.44 627.2V464h220.16V627.2z m220.8 64v163.2H397.44V691.2zM121.6 464h211.2V627.2H121.6z m560 0h220.8V627.2h-220.8zM121.6 691.2h211.2v163.2H121.6z m560 163.2V691.2h220.8v163.2z"></path>
                    </svg>
                )
            case 'blockquote':
                return (
                    <svg className="rql-svg-icon" viewBox="0 0 1024 1024" width={width} height={height}>
                        <path d="M849.6 231v109.5c-46.4 14.9-84.6 41.5-114.4 81.3-29.9 36.5-44.8 76.3-43.1 116.1 8.3-5 21.6-6.6 41.5-6.6 34.8 0 64.7 11.6 91.2 36.5 23.2 24.9 36.5 56.4 36.5 94.5S848 732 821.5 756.8C795 780 761.8 793.3 722 793.3c-46.4 0-82.9-19.9-112.8-56.4s-43.1-84.6-43.1-141c0-89.6 24.9-165.8 76.3-230.5C692 299 761.7 254.2 849.6 231z m-403 0v109.5c-46.4 14.9-82.9 41.5-112.8 81.3-31.5 36.5-46.4 76.3-44.8 116.1 8.3-5 21.6-6.6 41.5-6.6 34.8 0 64.7 11.6 89.6 36.5 24.9 24.9 38.1 56.4 38.1 94.5s-13.3 69.7-38.1 94.5c-26.5 23.2-61.4 36.5-101.2 36.5-46.4 0-82.9-19.9-111.1-56.4-29.9-36.5-44.8-84.6-44.8-141 0-89.6 24.9-165.8 76.3-230.5C289 299 358.7 254.2 446.6 231z"></path>
                    </svg>
                )
            case 'line':
                return (
                    <svg className="rql-svg-icon" viewBox="0 0 1024 1024" width={width} height={height}>
                        <path d="M960 470.857143H64c-5.028571 0-9.142857 4.114286-9.142857 9.142857v64c0 5.028571 4.114286 9.142857 9.142857 9.142857h896c5.028571 0 9.142857-4.114286 9.142857-9.142857v-64c0-5.028571-4.114286-9.142857-9.142857-9.142857z"></path>
                    </svg>
                )
            case 'code-block':
                return (
                    <svg className="rql-svg-icon" viewBox="0 0 1024 1024" width={width} height={height}>
                        <path d="M321.828571 226.742857c-14.628571-14.628571-36.571429-14.628571-51.2 0L7.314286 482.742857c-14.628571 14.628571-14.628571 36.571429 0 51.2l256 256c14.628571 14.628571 36.571429 14.628571 51.2 0 14.628571-14.628571 14.628571-36.571429 0-51.2L87.771429 512l234.057142-234.057143c7.314286-14.628571 7.314286-36.571429 0-51.2z m263.314286 0c-14.628571 0-36.571429 7.314286-43.885714 29.257143l-131.657143 497.371429c-7.314286 21.942857 7.314286 36.571429 29.257143 43.885714s36.571429-7.314286 43.885714-29.257143l131.657143-497.371429c7.314286-14.628571-7.314286-36.571429-29.257143-43.885714z m431.542857 256l-256-256c-14.628571-14.628571-36.571429-14.628571-51.2 0-14.628571 14.628571-14.628571 36.571429 0 51.2L936.228571 512l-234.057142 234.057143c-14.628571 14.628571-14.628571 36.571429 0 51.2 14.628571 14.628571 36.571429 14.628571 51.2 0l256-256c14.628571-14.628571 14.628571-43.885714 7.314285-58.514286z"></path>
                    </svg>
                )
            case 'emotion':
                return (
                    <svg className="rql-svg-icon" viewBox="0 0 1024 1024" width={width} height={height}>
                        <path d="M512 0c282.763636 0 512 229.236364 512 512s-229.236364 512-512 512S0 794.763636 0 512 229.236364 0 512 0z m0 93.090909a418.909091 418.909091 0 1 0 0 837.818182 418.909091 418.909091 0 0 0 0-837.818182z m263.354182 512a279.365818 279.365818 0 0 1-526.708364 0zM349.090909 335.127273a69.818182 69.818182 0 1 1 0 139.636363 69.818182 69.818182 0 0 1 0-139.636363z m325.818182 0a69.818182 69.818182 0 1 1 0 139.636363 69.818182 69.818182 0 0 1 0-139.636363z"></path>
                    </svg>
                )
            case 'audio':
                return (
                    <svg className="rql-svg-icon" viewBox="0 0 1024 1024" width={width} height={height}>
                        <path d="M338.112 642.88l0.64-415.04c0-29.504 23.744-53.632 51.584-53.632l454.464-52.48h3.072c28.8-2.048 54.528 22.208 54.528 51.84v505.536c0 38.656-14.976 73.536-42.496 99.008-25.792 25.536-62.656 40.32-99.84 40.32a141.76 141.76 0 0 1-142.336-141.056c0-77.632 63.488-141.12 142.336-141.12 27.52 0 53.12 6.912 74.816 20.288V348.672l-428.608 47.552v365.248A142.912 142.912 0 0 1 263.936 902.4 141.76 141.76 0 0 1 121.6 761.28c0-77.952 62.08-136.704 142.336-136.704 28.736 0 52.352 5.568 74.176 18.304z"></path>
                    </svg>
                )
            case 'video':
                return (
                    <svg className="rql-svg-icon" viewBox="0 0 1024 1024" width={width} height={height}>
                        <path d="M85.333333 170.666667v682.666666h853.333334V170.666667H85.333333z m0-85.333334h853.333334a85.333333 85.333333 0 0 1 85.333333 85.333334v682.666666a85.333333 85.333333 0 0 1-85.333333 85.333334H85.333333a85.333333 85.333333 0 0 1-85.333333-85.333334V170.666667a85.333333 85.333333 0 0 1 85.333333-85.333334z M469.333333 580.309333L592.298667 512 469.333333 443.690667v136.618666zM384 371.2a42.666667 42.666667 0 0 1 63.402667-37.333333l253.44 140.8a42.666667 42.666667 0 0 1 0 74.666666l-253.44 140.8A42.666667 42.666667 0 0 1 384 652.8V371.2z"></path>
                    </svg>
                )
            case 'image':
                return (
                    <svg className="rql-svg-icon" viewBox="0 0 1024 1024" width={width} height={height}>
                        <path d="M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z"></path>
                    </svg>
                )
            case 'vote':
                return (
                    <svg className="rql-svg-icon" viewBox="0 0 1024 1024" width={width} height={height}>
                        <path d="M224 256A96 96 0 0 1 320 352v320a96 96 0 0 1-192 0v-320A96 96 0 0 1 224 256z M128 832m32 0l704 0q32 0 32 32l0 0q0 32-32 32l-704 0q-32 0-32-32l0 0q0-32 32-32Z M512 384a96 96 0 0 1 96 96v192a96 96 0 0 1-192 0v-192A96 96 0 0 1 512 384zM800 128A96 96 0 0 1 896 224v448a96 96 0 0 1-192 0v-448A96 96 0 0 1 800 128z"></path>
                    </svg>
                )
            case 'link':
                return (
                    <svg className="rql-svg-icon" viewBox="0 0 1024 1024" width={width} height={height}>
                        <path d="M375.424 648.576a60.864 60.864 0 0 1 0-86.144l172.288-172.288a60.864 60.864 0 1 1 86.144 86.144l-172.288 172.288a60.864 60.864 0 0 1-86.144 0z m129.216 43.136a60.864 60.864 0 1 1 86.144 86.144L504.64 864A243.712 243.712 0 0 1 160 519.36L246.144 433.28a60.864 60.864 0 1 1 86.144 86.144L246.144 605.504a121.92 121.92 0 0 0 172.352 172.352l86.144-86.144z m0-516.992a243.712 243.712 0 0 1 344.64 344.64l-86.208 86.144a60.864 60.864 0 1 1-86.144-86.144l86.144-86.144a121.92 121.92 0 0 0-172.288-172.288L504.64 347.072a60.928 60.928 0 1 1-86.144-86.144L504.64 174.72z"></path>
                    </svg>
                )
            case 'close':
                return (
                    <svg className="rql-svg-icon" viewBox="0 0 1024 1024" width={width} height={height}>
                        <path d="M902.741 816.213l-306.005-307.2L894.72 205.056c18.859-18.859 18.859-49.323 0-68.181s-36.01-18.859-54.87 0L532.396 444.416 226.048 136.875c-18.859-18.859-49.323-18.859-68.181 0s-18.859 49.322 0 68.181L464.81 512 157.952 818.944c-18.859 18.859-18.859 49.323 0 68.181s49.323 18.859 68.181 0l303.787-309.93 309.93 309.93c18.86 18.859 44.033 16.128 62.806-2.645s18.944-49.408 0.085-68.267z"></path>
                    </svg>
                )
            default:
                return <></>
        }
    }
}

export default Icon
