import { describe, it, expect } from "vitest";
import { WebAudioEngine, SynthVoice } from "../src/webaudio.js";

describe("WebAudioEngine", () => {
  it("should allocate a voice with default params", () => {
    const engine = new WebAudioEngine();
    const voice = engine.allocateVoice();
    expect(voice).not.toBeNull();
    expect(voice!.getParams().frequency).toBe(440);
  });

  it("should respect max voice limit", () => {
    const engine = new WebAudioEngine({ maxVoices: 2 });
    engine.allocateVoice();
    engine.allocateVoice();
    const third = engine.allocateVoice();
    expect(third).toBeNull();
    expect(engine.voiceCount).toBe(2);
  });

  it("should release voices", () => {
    const engine = new WebAudioEngine();
    const voice = engine.allocateVoice()!;
    expect(engine.releaseVoice(voice.id)).toBe(true);
    expect(engine.voiceCount).toBe(0);
  });

  it("should track active voice count", () => {
    const engine = new WebAudioEngine();
    const v1 = engine.allocateVoice()!;
    const v2 = engine.allocateVoice()!;
    v1.noteOn();
    expect(engine.activeVoiceCount).toBe(1);
    v2.noteOn();
    expect(engine.activeVoiceCount).toBe(2);
    v1.noteOff();
    expect(engine.activeVoiceCount).toBe(1);
  });
});

describe("SynthVoice", () => {
  it("should update params without losing unchanged values", () => {
    const voice = new SynthVoice("v1", { frequency: 880 });
    voice.setParams({ amplitude: 0.3 });
    const params = voice.getParams();
    expect(params.frequency).toBe(880);
    expect(params.amplitude).toBe(0.3);
  });
});
