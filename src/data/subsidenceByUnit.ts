export const subsidenceByUnit: Record<string, {
  isSubsidenceZone: boolean;
  maxAccumulatedSubsidence?: string;
}> = {
  "第一河川分署": {
    isSubsidenceZone: false,
  },
  "第二河川分署": {
    isSubsidenceZone: false,
  },
  "第三河川分署": {
    isSubsidenceZone: true,
    maxAccumulatedSubsidence: "0.01 公尺"
  },
  "第四河川分署": {
    isSubsidenceZone: true,
    maxAccumulatedSubsidence: "2.1 公尺"
  },
  "第五河川分署": {
    isSubsidenceZone: true,
    maxAccumulatedSubsidence: "1.61 公尺"
  },
  "第六河川分署": {
    isSubsidenceZone: true,
    maxAccumulatedSubsidence: "0.31 公尺"
  },
  "第七河川分署": {
    isSubsidenceZone: true,
    maxAccumulatedSubsidence: "3.62 公尺",
  },
  "第八河川分署": {
    isSubsidenceZone: false,
  },
  "第九河川分署": {
    isSubsidenceZone: false,
  },
  "第十河川分署": {
    isSubsidenceZone: true,
    maxAccumulatedSubsidence: "2.11 公尺",
  },
};