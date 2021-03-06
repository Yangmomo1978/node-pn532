"use strict";

/*
  PN532 User Manual
*/

// Typical PN532 address
exports.I2C_ADDRESS = 72 >> 1; // 7-bit address bit shifted to 8-bit (?)
// exports.I2C_READBIT = 0x01;
// exports.I2C_BUSY = 0x00;
// exports.I2C_READY = 0x01;
// exports.I2C_READYTIMEOUT = 20;

// Section 7 - Commands supported (page 65)
// Miscellaneous
exports.COMMAND_DIAGNOSE = 0;
exports.COMMAND_GET_FIRMWARE_VERSION = 2;
exports.COMMAND_GET_GENERAL_STATUS = 4;
exports.COMMAND_READ_REGISTER = 6;
exports.COMMAND_WRITE_REGISTER = 8;
exports.COMMAND_READ_GPIO = 12;
exports.COMMAND_WRITE_GPIO = 14;
exports.COMMAND_SET_SERIAL_BAUD_RATE = 16;
exports.COMMAND_SET_PARAMETERS = 18;
exports.COMMAND_SAMCONFIGURATION = 20;
exports.COMMAND_POWER_DOWN = 22;
// RF Communicaions
exports.COMMAND_RF_CONFIGUATION = 50;
exports.COMMAND_RF_REGULATION_TEST = 88;
// Initiator
exports.COMMAND_IN_JUMP_FOR_DEP = 86;
exports.COMMAND_IN_JUMP_FOR_PSL = 70;
exports.COMMAND_IN_LIST_PASSIVE_TARGET = 74;
exports.COMMAND_IN_ATR = 80;
exports.COMMAND_IN_PSL = 78;
exports.COMMAND_IN_DATA_EXCHANGE = 64;
exports.COMMAND_IN_COMMUNICATE_THRU = 66;
exports.COMMAND_IN_DESELECT = 68;
exports.COMMAND_IN_RELEASE = 82;
exports.COMMAND_IN_SELECT = 84;
exports.COMMAND_IN_AUTO_POLL = 96;
// Target
exports.TG_INIT_AS_TARGET = 140;
exports.TG_SET_GENERAL_BYTES = 146;
exports.TG_GET_DATA = 134;
exports.TG_SET_DATA = 142;
exports.TG_SET_META_DATA = 148;
exports.TG_GET_INITIATOR_COMMAND = 136;
exports.TG_RESPONSE_TO_INITIATOR = 144;
exports.TG_GET_TARGET_STATUS = 138;

// Frame Identifiers (TFI)
exports.DIRECTION_HOST_TO_PN532 = 212;
exports.DIRECTION_PN532_TO_HOST = 213;

// Values for PN532's SAMCONFIGURATION function.
exports.SAMCONFIGURATION_MODE_NORMAL = 1;
exports.SAMCONFIGURATION_MODE_VIRTUAL_CARD = 2;
exports.SAMCONFIGURATION_MODE_WIRED_CARD = 3;
exports.SAMCONFIGURATION_MODE_DUAL_CARD = 4;

exports.SAMCONFIGURATION_TIMEOUT_50MS = 1;

exports.SAMCONFIGURATION_IRQ_OFF = 0;
exports.SAMCONFIGURATION_IRQ_ON = 1;

// Values for the PN532's RFCONFIGURATION function.
exports.RFCONFIGURATION_CFGITEM_MAXRETRIES = 5;

// Section 7.3.5 (page 115)
exports.CARD_ISO14443A = 0; // 106 kbps type A (ISO/IEC14443 Type A)
exports.CARD_FELICA212 = 1; // 212 kbps (FeliCa polling)
exports.CARD_FELICA414 = 2; // 424 kbps (FeliCa polling)
exports.CARD_ISO14443B = 3; // 106 kbps type B (ISO/IEC14443-3B)
exports.CARD_JEWEL = 4; // 106 kbps Innovision Jewel tag

exports.MIFARE_COMMAND_AUTH_A = 96;
exports.MIFARE_COMMAND_AUTH_B = 97;
exports.MIFARE_COMMAND_READ = 48;
exports.MIFARE_COMMAND_WRITE_4 = 162;
exports.MIFARE_COMMAND_WRITE_16 = 160;

exports.TAG_MEM_NULL_TLV = 0;
exports.TAG_MEM_LOCK_TLV = 1;
exports.TAG_MEM_MEMCONTROL_TLV = 2;
exports.TAG_MEM_NDEF_TLV = 3;
exports.TAG_MEM_PROPRIETARY_TLV = 253;
exports.TAG_MEM_TERMINATOR_TLV = 254;