import React from 'react'

function App() {
    let iframeElement: HTMLIFrameElement | null = null
    const handleNav = (page: string) => {
        try {
            iframeElement = document.getElementById(
                'main-iframe',
            ) as HTMLIFrameElement
            if (iframeElement) {
                iframeElement.src = `./projects/${page}/index.html`
            }
        } catch (error) {
            console.log('error :>> ', error)
        }
    }
    return (
        <div className="App">
            <header
                style={{
                    height: 100,
                    width: '100%',
                    backgroundColor: 'yellow',
                }}
            >
                javascript 30
                <select
                    onChange={(e) => handleNav(e.target.value)}
                    defaultValue={''}
                >
                    {' '}
                    <option disabled value={''}>
                        {' '}
                        -- select an option --{' '}
                    </option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                </select>
            </header>
        </div>
    )
}

export default App
