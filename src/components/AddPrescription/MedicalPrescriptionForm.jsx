import React, { useState } from 'react';
import Styles from "./AddPrescription.module.css";
import { IoMdAdd } from "react-icons/io";

const MedicalPrescriptionForm = ({prevStep, nextStep, handleChange, values}) => {
    
    const [medications, setMedications] = useState([{ dosageNum: '', dosageUnit: '', genericName: '', brandName: '', directionOfUse: '' }]);

    const addMoreMedication = () => {
        setMedications([...medications, { dosageNum: '', dosageUnit: '', genericName: '', brandName: '', directionOfUse: '' }]);
    };

    const Continue = e => {
        e.preventDefault();
        nextStep();
    }

    const isRequired = true; // Set this based on the logic for determining required fields 
    
    const handleAgeChange = e => {
        // Validate that the input is a valid number
        const value = e.target.value;
        if (!isNaN(value) && value >= 0) {
            handleChange('patientAge')(e);
        } else {
            console.log("ERROR: Invalid input.");
        }
    };

    const handleDosageNumChange = (e, index) => {
        const newMedications = [...medications];
        newMedications[index].dosageNum = e.target.value;
        setMedications(newMedications);
    };

    return (
        <form className={Styles["Prescription__form__styling"]}>
            <h3>Patient Details</h3>
            <div className={Styles["Patient__form__div_wrapper"]}>
                <div className={Styles["main_div"]}>
                    <div className={Styles["input_box_name"]}>
                        <label className={Styles["input_label"]}>
                            Patient Name{isRequired && <span className={Styles["required_asterisk"]}> *</span>}
                        </label>
                        <input 
                            type="text"  
                            value={values.patientName} 
                            onChange={handleChange('patientName')}
                            required
                        />
                    </div>

                    <div className={Styles["input_box_age"]}>
                        <label className={Styles["input_label"]}>
                            Age{isRequired && <span className={Styles["required_asterisk"]}> *</span>}
                        </label>
                        <input
                            type="text"
                            value={values.patientAge} 
                            onChange={handleAgeChange}
                            required
                        />    
                    </div>
                </div>

                <div className={Styles["main_div"]}>
                    <div className={Styles["input_box_sex"]}>
                        <label className={Styles["input_label"]}>
                            Sex{isRequired && <span className={Styles["required_asterisk"]}> *</span>} 
                        </label> 
                        <div>
                            <select 
                                value={values.patientSex}
                                onChange={handleChange('patientSex')} 
                                className={Styles["sex_select_style"]}
                                required>
                                
                                <option value=""  className={Styles["sex_select_option"]}>
                                    Choose an option
                                </option>
                                <option value="Female"  className={Styles["sex_select_option"]}>
                                    Female
                                </option>
                                <option value="Male"  className={Styles["sex_select_option"]}>
                                    Male
                                </option>
                            </select>
                        </div>
                    </div>

                    <div className={Styles["input_box_weight"]}>
                        <label className={Styles["input_label"]}>
                            Weight{isRequired && <span className={Styles["required_asterisk"]}> *</span>}
                        </label>
                        <input 
                            type="text"  
                            value={values.patientWeight} 
                            onChange={handleChange('patientWeight')}
                            required
                        />
                    </div>

                    <div className={Styles["input_box_address"]}>
                        <label className={Styles["input_label"]}>
                            Address{isRequired && <span className={Styles["required_asterisk"]}> *</span>}
                        </label>
                        <input 
                            type="text"  
                            value={values.patientAddress} 
                            onChange={handleChange('patientAddress')}
                            required
                        />
                    </div>
                </div>
                
                <div className={Styles["main_div"]}>
                    <div className={Styles["input_box_calendar"]}>
                        <label className={Styles["input_label"]}>
                            Date of Consultation{isRequired && <span className={Styles["required_asterisk"]}> *</span>}
                        </label>
                        <input 
                            type="date"  
                            value={values.patientConsultationDate} 
                            onChange={handleChange('patientConsultationDate')}
                            required
                        />
                    </div>
                </div>

                <br/>
                <h3>Medications</h3>
                
                {medications.map((medication, index) => (
                <div key={index} className={Styles["medications__wrap"]}>
                    <div className={Styles["main_div-2"]}>
                        <div className={Styles["input_box_dosage"]}>
                            <label className={Styles["input_label"]}>
                                Dosage{isRequired && <span className={Styles["required_asterisk"]}> *</span>}
                            </label>
                            <input
                                type="text"
                                value={medication.dosageNum}
                                onChange={(e) => handleDosageNumChange(e, index)}
                                required
                            />   
                        </div>

                        <div className={Styles["input_box_dosageUnit"]}>
                            <label className={Styles["input_label"]}>
                                Unit{isRequired && <span className={Styles["required_asterisk"]}> *</span>} 
                            </label> 
                            <div>
                                <select 
                                    value={medication.dosageUnit}
                                    onChange={(e) => handleChange('dosageUnit', index)(e)}
                                    className={Styles["dosageUnit_select_style"]}
                                    required>
                                    
                                    <option value=""  className={Styles["dosageUnit_select_option"]}>
                                        Choose an option
                                    </option>
                                    <option value="Grams"  className={Styles["dosageUnit_select_option"]}>
                                        Grams (g)
                                    </option>
                                    <option value="Milligrams"  className={Styles["dosageUnit_select_option"]}>
                                        Milligrams (mg)
                                    </option>
                                    <option value="Micrograms"  className={Styles["dosageUnit_select_option"]}>
                                        Micrograms
                                    </option>
                                    <option value="Nanograms"  className={Styles["dosageUnit_select_option"]}>
                                        Nanograms
                                    </option>
                                    <option value="Litres"  className={Styles["dosageUnit_select_option"]}>
                                        Litres
                                    </option>
                                    <option value="Millilitres"  className={Styles["dosageUnit_select_option"]}>
                                        Millilitres (ml)
                                    </option>
                                </select>
                            </div>
                        </div>

                        <div className={Styles["input_box_genericName"]}>
                            <label className={Styles["input_label"]}>
                                Generic Name{isRequired && <span className={Styles["required_asterisk"]}> *</span>}
                            </label>
                            <input 
                                type="text"  
                                value={medication.genericName}
                                onChange={(e) => handleChange('genericName', index)(e)}
                                required
                            />
                        </div>

                        <div className={Styles["input_box_brandName"]}>
                            <label className={Styles["input_label"]}>
                                Brand Name{isRequired && <span className={Styles["required_asterisk"]}> *</span>}
                            </label>
                            <input 
                                type="text"  
                                value={medication.brandName}
                                onChange={(e) => handleChange('brandName', index)(e)}
                                required
                            />
                        </div>
                    </div>

                    <div className={Styles["main_div"]}>
                        <div className={Styles["input_box"]}>
                            <label className={Styles["input_label"]}>
                                Direction of Use{isRequired && <span className={Styles["required_asterisk"]}> *</span>}
                            </label>
                            <div>
                                <textarea
                                    type="text"
                                    value={medication.directionOfUse}
                                    onChange={(e) => handleChange('directionOfUse', index)(e)}
                                    className={Styles["textareaStyle"]}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                </div>
                ))}

                <div className={Styles["Add__more__wrapper"]}>
                    <button onClick={addMoreMedication} className={Styles["Add__more__btn__styling"]}>
                        <IoMdAdd/> Add More
                    </button>
                </div>
            </div>

            <div className={Styles["Add__more__wrapper"]}>
                <button  onClick={Continue} className={Styles["Next__btn__styling"]}>
                    Next
                </button>
            </div>
        </form>
  )
}

export default MedicalPrescriptionForm