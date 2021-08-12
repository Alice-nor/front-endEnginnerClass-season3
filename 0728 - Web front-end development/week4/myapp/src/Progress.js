import React from 'react'; // React 一定要的

// React component
function Progress(){
    const barWidth = '70%';
    return (
        <div>
            <div className="progress-back"
                style={{
                backgroundColor: 'rgba(0,0,0,0.2)',
                width: '200px',
                height: '20px',
                borderRadius:'10px'
                }}>
                <div className="progress-bar"
                    style={{
                    backgroundColor: '#fe5196',
                    width: barWidth,
                    height: '100%',
                    borderRadius:'10px'
                    }}>
                </div>
            </div>
        </div>
    )
}

export default Progress;