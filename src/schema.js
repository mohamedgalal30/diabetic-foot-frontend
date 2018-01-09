export default {
  history: {
    info: { name: "", age: "", gender: "", address: "", phone: "", job: "" },
    presentingComplaint: {
      skinBreakdown: {
        value: false,
        details: {
          whereIsTheProblem: "",
          whenDidItStart: "",
          howDidItStart: "",
          whatMakesItBetter: "",
          whatMakesItWorse: "",
          howHasItBeenTreated: "",
        }
      },
      swelling: {
        value: false,
        details: {
          whereIsTheProblem: "",
          whenDidItStart: "",
          howDidItStart: "",
          whatMakesItBetter: "",
          whatMakesItWorse: "",
          howHasItBeenTreated: "",
        }
      },
      colorChange: {
        value: false,
        details: {
          whereIsTheProblem: "",
          whenDidItStart: "",
          howDidItStart: "",
          whatMakesItBetter: "",
          whatMakesItWorse: "",
          howHasItBeenTreated: "",
        }
      },
      pain: {
        value: false,
        details: {
          whenDidItStart: "",
          howDidItStart: "",
          wasThereAnInjury: "",
          whereIsThePain: "",
          whatIsItsNature: "",
          whatAggravatesThePain: "",
          whatRelievesThePain: "",
          whenDoesItOccur: "",
        }
      },
    },
    pastFootHistory: {
      previousUlcersAndTreatment: false,
      amputations: {
        value: false,
        type: "" //[major or minor]
      },
      peripheralAngioplasties: false,
      peripheralArterialBypasses: false
    },
    diabeticHistory: {
      typeOfDiabetes: "", // [type1, type2]
      durationOfDiabetes: {
        value: "", //[discover, treatment]
        details: ""
      },
      treatmentOfDiabetes: {
        value: "",//[Insulin, oral hypoglycemic] 
        details: ""
      },
      complicationsOfDiabetes: {
        retinopathy: false,
        nephropathy: false,
        cardiovascular: false,
        cerebrovascular: false,
      }
    },
    pastMedicalHistory: {
      seriousIllness: false,
      accidents: false,
      injuries: false,
      hospitalAdmissions: false,
      operations: false,
    },
    drugHistory: {
      presentMedication: "",
      knownAllergies: "",
    },
    familyHistory: {
      diabetes: false,
      otherSeriousIllness: "",
      causeOfDeathOfNearRelatives: ""
    },
    psychosocialHistory: {
      occupation: "",
      numberOfCigarettes: "", //smoked per day
      numberOfUnitsOfAlcohol: "", //per day
      psychiatricIllness: "",
      homeCircumstances: "",
      livesWith: "", //[Alone, friends or relative]
    }
  },
  examination: {
    inespection: {
      skin: {
        dryAndFissured: false,
        dilatedVeinsHairLoss: false,
        atrophyOfTheSubcutaneous: false,
        wrinkledSkin: false,
        footUlcer: false,
        abrasions: false,
        bullaeAndFissures: false,
      },
      callus: "",
      nails: {
        structure: false,
        abnormalitiesUnderNail: false,
        signsOfInfections: false
      },
      swelling: "bilateralFootSwelling",
      deformity: [],
      limitedJointMobility: false,
      color: {
        redFoot: false,
        blueFoot: false,
        redToe: false,
        blueToe: false,
        palewhite: false,
        black: false,
      },
      necrosis: {
        blackOrBrownDevitalizedTissue: false,
        wetOrDry: false,
      }
    },
    palpation: {
      pulses: {
        dorsalisPedis: "",
        posteriorTibial: ""
      },
      temperature: {
        warmAreas: false,
        hotSpots: false,
        unilateralPedalTemperature: false,
        coldFoot: false,
      },
      oedema: false,
      crepitus: false
    },
    neurologicalAssessment: {
      monofilamentIsAt5site: {
        all: false,
        some: false,
        no: false,
      },
      achillesTendonPinch: false,
      cottonWisp: {
        all: false,
        some: false,
        no: false,
      },
      ibrationUsing128HzTuningFork: false,
      footwearAssessment: "",
      generalExamination: {
        cardiovascular: false,
        respiratory: false,
        abdomen: false,
        eyes: ""
      }
    }
  },
  investigations: {
    main: {
      neurological: "",
      vascular: "",
      skinTemperature: "",
      footPressures: "",
    },
    laboratory: {
      fullBloodCount: "",
      serumElectrolytesUreaAndCreatinine: "",
      bloodGlucoseAndHbAlc: "",
      serumBilirubinAlkalinePhosphatase: "",
      serumCholesterolAndTriglycerides: ""
    },
    radiological: {
      xray: "",
      mri: "",
      duplex: ""
    }
  },
  diagnosis: {
    class: "",
    stage: "",
    multidisciplinaryManagementForEachStage: []
  }
}