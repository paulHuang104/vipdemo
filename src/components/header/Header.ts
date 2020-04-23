import { defineComponent, reactive, ref } from "@vue/composition-api";
import { Tooltip } from "@104vip-f2e-common/components/tooltip";

export default defineComponent({
  components: { Tooltip },
  setup() {
    /* Datas */
    const navMenu = reactive([
      {
        label: "首頁"
      },
      {
        label: "公司",
        child: [
          {
            label: "公司資料"
          },
          {
            label: "廣告暫停"
          }
        ]
      },
      {
        label: "職務",
        child: [
          {
            label: "所有職務"
          },
          {
            label: "刊登數據"
          }
        ]
      },
      {
        label: "查詢",
        child: [
          {
            label: "查詢人才"
          },
          {
            label: "推薦履歷"
          },
          {
            label: "查詢配對"
          },
          {
            label: "代碼查詢"
          }
        ]
      },
      {
        label: "履歷",
        child: [
          {
            label: "應徵履歷"
          },
          {
            label: "儲存履歷"
          },
          {
            label: "面試行事曆"
          },
          {
            label: "求職失約"
          },
          {
            label: "封鎖求職者"
          }
        ]
      },
      {
        label: "聯絡訊息"
      },
      {
        label: "購買",
        child: [
          {
            label: "線上購買"
          },
          {
            label: "加強曝光"
          },
          {
            label: "帳務中心"
          },
          {
            label: "加值紀錄"
          }
        ]
      },
      {
        label: "設定",
        child: [
          {
            label: "帳號"
          },
          {
            label: "通訊錄"
          },
          {
            label: "使用紀錄"
          },
          {
            label: "信函範本"
          },
          {
            label: "免費工具"
          }
        ]
      }
    ]);
    const searchText = ref("");
    /* Mathers */
    function clearText(): void {
      searchText.value = "";
    }
    async function submitSearch(): Promise<void> {
      alert("Search, Please Wait...");
      await clearText();
    }
    return { navMenu, searchText, clearText, submitSearch };
  }
});
