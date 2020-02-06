import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Typist from 'react-typist'

function DialogueBox(props) {

    const generateDialogue = (context) => {
        if (context === 'Flask') {
            return renderDialogue('Be seeing you.', context)
        }

        if (context === 'mushroom' || context === 'stump' || context === 'rock') {
            return renderDialogue(`You investigate the inconspicuous looking ${context}.`)
        }

        if (context === 'tree') {
            return renderDialogue(`The ${context} radiates a calming aura.`)
        }
    }

    const renderDialogue = (text, name) => {
        if (props.show) {
            return (
                <div
                    className={'dialogue-container'}
                    style={{
                        position: 'absolute',
                        zIndex: '1001',
                        height: '48px',
                        width: '100%',
                        top: '75%',
                        color: 'white',
                        fontSize: '0.5rem'
                    }}
                >
                    <div 
                        className="dialogue-box"
                        style={{
                            backgroundImage: 'linear-gradient(to bottom, rgb(0, 0, 0, 0.99), rgb(0, 0, 0, 0.8)',
                            border: '1px solid #f5f2d0',
                            height: '100%',
                            width: '85%',
                            margin: '0 auto',
                            padding: '0.5rem'
                        }}
                    >
                        <div
                            style={{
                                marginLeft: '0.3rem'
                            }}
                        >
                            {name ? (
                                <div style={{ marginLeft: '-0.25rem', marginBottom: '0.25rem' }}>{`『${name}』`}</div>
                            ) : null}
                            <Typist
                                stdTypingDelay={0}
                                avgTypingDelay={20}
                                cursor={{ show: false }}
                            >
                                {text}
                            </Typist>
                        </div>
                    </div>
                </div>
            )
        } else return
    }

    useEffect(() => {
        generateDialogue(props.context)
    }, [props.show, props.context])

    return (
        <>
            {generateDialogue(props.context)}
        </>
    )
}

function mapStateToProps(state) {
    return {
        ...state.dialogue
    }
}

export default connect(mapStateToProps)(DialogueBox)