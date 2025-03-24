import React from 'react';
import {Mosaic, MosaicBranch, MosaicNode, MosaicWindow} from 'react-mosaic-component';
import 'react-mosaic-component/react-mosaic-component.css';
import CompanyTile from "./components/CompanyTile";


const initialMosaicValue: MosaicNode<string> = {
    direction: 'row',
    first: '1',
    second: {
        direction: 'column',
        first: '2',
        second: '3'
    }
};


const App: React.FC = () => {
  return (
      <div className="h-screen w-screen">
          <Mosaic<string>
              renderTile={(id: string, path: MosaicBranch[]) => (
                  <MosaicWindow<string>
                      title="Company info"
                      path={path}
                      key={id}
                  >
                      <CompanyTile id={id}/>
                  </MosaicWindow>
              )}
              initialValue={initialMosaicValue}
          />
      </div>
  );
}

export default App;
