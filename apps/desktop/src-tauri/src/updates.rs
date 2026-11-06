//! 자동 업데이트 비활성화.
//!
//! 글플러스는 tauri-plugin-updater를 사용하지 않는다. 원본 HOP의 업데이트 배포처를
//! 가리키던 기능이며, 이 플러그인이 끌어오는 의존성(zip 4.x 등)에 알려진 취약점이 있어
//! 제거했다. 프런트엔드(update-notice)가 호출하는 명령은 호환을 위해 남겨 두고,
//! 항상 "업데이트 없음(Idle)" 상태를 돌려준다.

use serde::Serialize;
use tauri::AppHandle;

#[allow(dead_code)]
#[derive(Debug, Clone, Serialize, PartialEq, Eq, Default)]
#[serde(tag = "status", rename_all = "camelCase")]
pub enum UpdateNoticeState {
    #[default]
    Idle,
}

#[derive(Default)]
pub struct UpdateManagerState;

pub fn install_startup_update_check(_app: &AppHandle) {}

#[tauri::command]
pub fn get_update_state(_app: AppHandle) -> Result<UpdateNoticeState, String> {
    Ok(UpdateNoticeState::Idle)
}

#[tauri::command]
pub fn start_update_install(_app: AppHandle) -> Result<(), String> {
    Err("글플러스는 자동 업데이트를 지원하지 않습니다.".to_string())
}

#[tauri::command]
pub fn restart_to_apply_update(_app: AppHandle) -> Result<(), String> {
    Err("글플러스는 자동 업데이트를 지원하지 않습니다.".to_string())
}
