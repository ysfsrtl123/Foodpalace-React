import Branches from "./Branches";
import { branches } from "./data";

const BranchesPage = () => {
    const branchNo = branches.length; 
    return (
        <div className="mt-5 mb-4">
            <div className="container branch mt-5">
                <div className="row">
                    <div className="col d-block justify-content-start">
                        <h2 className="mb-3">
                            <strong>
                                <i>Şubelerimiz</i>
                            </strong>
                        </h2>
                        <h4 className="">Şube Sayımız: {branchNo}</h4>
                    </div>
                    <div className="row"> 
                        <div className="col">
                        {branches.map((b, index) => (
                            <Branches key={index} branches={b} />
                        ))}
                    </div></div>
                   
                </div>
            </div>
        </div>
    );
};

export default BranchesPage;
